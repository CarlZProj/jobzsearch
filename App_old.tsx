import {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import {
  withAuthenticator,
  useAuthenticator,
  Authenticator,
} from '@aws-amplify/ui-react-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';

import {RAPID_API_KEY} from '@env';

const userSelector = (context: any) => [context.user];

const SignOutButton = () => {
  const {user, signOut, route} = useAuthenticator(userSelector);
  console.log(route);
  return route === 'authenticated' || route === 'signIn' ? (
    <Pressable onPress={signOut}>
      <Text>Hello, {user.username}! Click here to sign out!</Text>
    </Pressable>
  ) : (
    <Authenticator />
  );
};

const axios = require('axios');

const App = () => {
  const [job, setJob] = useState<string>();
  // run when app mounted
  useEffect(() => {
    const fetchUser = async () => {
      // get auth user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      // console.log(userInfo);

      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(getUser, {id: userInfo.attributes.sub}),
        );

        const user = userData.data.getUser;

        if (user) {
          console.log('user is already registered in database');

          const endpoint = 'search';

          // https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch
          const options = {
            method: 'GET',
            url: `https://jsearch.p.rapidapi.com/${endpoint}`,
            params: {
              query: `New grad software developer ${user.country}`,
              page: '1',
              num_pages: '1',
              date_posted: user.datePosted,
              remote_jobs_only: user.remoteJobsOnly,
              employment_types: user.employmentTypes,
              job_requirements: user.experience,
            },
            headers: {
              'X-RapidAPI-Key': RAPID_API_KEY,
              'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
            },
          };

          try {
            const response = await axios.request(options);
            console.log(response.data.data[0]);

            setJob(
              `${response.data.data[0].employer_name}: ${response.data.data[0].job_title}`,
            );
          } catch (error) {
            console.error(error);
          }

          return;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.attributes.name,
          datePosted: 'today',
          remoteJobsOnly: true,
          employmentType: 'FULLTIME',
          experience: 'under_3_years_experience',
          country: 'canada',
        };

        await API.graphql(
          graphqlOperation(createUser, {
            input: newUser,
          }),
        );
      }
    };

    fetchUser();
  }, []);

  return (
    <View>
      <Text>Hello World</Text>
      <Text>Test Job: {job}</Text>
      <SignOutButton />
    </View>
  );
};

export default withAuthenticator(App);
