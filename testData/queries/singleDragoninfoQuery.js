export default {
    query: `query Dragon($dragonId: ID!) {
        dragon(id: $dragonId) {
          crew_capacity
          id
          description
          name
          diameter {
            meters
          }
          dry_mass_kg
          type
          orbit_duration_yr
          trunk {
            trunk_volume {
              cubic_meters
            }
          }
        }
      }
    `,
    variables: {
      dragonId: 'PROVIDED_ID'
    },
  };
  

