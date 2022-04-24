export default {
  query: `mutation createNewUser($username: String, $rocketname: String) { 
        insert_users(objects: {name: $username, rocket: $rocketname}) {
          returning {
            id
            name
            rocket
            timestamp
          }
          affected_rows
        }
      }
    `,
  variables: {
    username: 'my_new_user',
    rocketname: 'super_rocket',
  },
};
