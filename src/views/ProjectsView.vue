<template>
<div class="projects">
  <h1 class="text-grey subheading">Projects</h1>

  <v-container class="my-16">
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(project, i) in userProjects"
        :key="i"
        :title="project.title"
      >

      <v-expansion-panel-text class="pt-2 text-grey">
        <div class="font-weight-bold">Due By {{ project.due }}</div>
        <div>{{ project.content }}</div>
      </v-expansion-panel-text>

      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</div>
</template>

<script>
export default {
  data: () => ({
    projects: [
      { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    ]
  }),
  computed: {
    userProjects() {
      return this.projects.filter(p => p.person.toLowerCase() === 'the net ninja')
    }
  }
}
</script>

<style>

</style>