<template>
  <div class="team">
    <h1 class="text-grey subheading">Team</h1>

    <v-container class="my-16">
      <v-row no-gutters>
        <v-col 
          v-for="(person, i) in team"
          :key="i"
          sm="6" md="4" lg="3"
        >
          <v-card flat class="text-center ma-3">
            <v-responsive class="pa-6 pb-0">
              <v-avatar size="100" class="bg-grey-lighten-2">
                <v-img :src="person.avatar"></v-img>
              </v-avatar>
            </v-responsive>

            <v-card-text>
              <div>{{ person.name }}</div>
              <div class="text-grey">{{ person.role }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                flat prepend-icon="mdi-message-text-outline" color="grey"
                class="ml-1"
              >
                Message
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    team: [
      { name: 'The Net Ninja', role: 'Web developer', avatar: require('@/assets/images/avatar-1.png') },
      { name: 'Ryu', role: 'Graphic designer', avatar: require('@/assets/images/avatar-2.png') },
      { name: 'Chun Li', role: 'Web developer', avatar: require('@/assets/images/avatar-3.png') },
      { name: 'Gouken', role: 'Social media maverick', avatar: require('@/assets/images/avatar-4.png') },
      { name: 'Yoshi', role: 'Sales guru', avatar: require('@/assets/images/avatar-5.png')}
    ]
  })
}
</script>

<style>

</style>