<template>
  <div class="dashboard">
    <h1 class="text-grey subheading">Dashboard</h1>

    <v-container class="my-16">
      <v-row class="ml-0 mb-6">
        <v-btn
          flat
          prepend-icon="mdi-folder"
          color="#f5f5f5"
          class="text-grey"
          @click="sortBy('title')"
        >
          By project name
          <v-tooltip 
            activator="parent"
            location="top"
          >
            Sort projects by project name
          </v-tooltip>
        </v-btn>

        <v-btn
          flat
          prepend-icon="mdi-account"
          color="#f5f5f5"
          class="text-grey"
          @click="sortBy('person')"
        >
          By person
          <v-tooltip
            activator="parent"
            location="top"
          >
            Sort projects by person
          </v-tooltip>
        </v-btn>
      </v-row>

      <v-card
          v-for="(project, i) in projects"
          :key="i"
          flat
        >
        <v-row no-gutters :class="`pa-4 project ${project.status}`">
          <v-col md="6" sm="12">
            <div class="caption text-grey">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>

          <v-col md="2" sm="4">
            <div class="caption text-grey">Person</div>
            <div>{{ project.person }}</div>
          </v-col>

          <v-col md="2" sm="4">
            <div class="caption text-grey">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>

          <v-col md="2" sm="4" align-self="center">
            <div class="d-flex align-end flex-column">
              <v-chip
                  :class="`${project.status} text-white`"
                >
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
  data: () => ({
    isLoading: true,
    projects: [
      { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    ]
  }),
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
});
</script>

<style>

  .project.complete {
    border-left: 4px solid #4CAF50;
  }

  .project.ongoing {
    border-left: 4px solid orange;
  }

  .project.overdue {
    border-left: 4px solid tomato;
  }

  .v-chip.complete {
    background: #4CAF50;
  }

  .v-chip.ongoing {
    background: orange;
  }

  .v-chip.overdue {
    background: tomato
  }

</style>
