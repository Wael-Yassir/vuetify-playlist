<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props" color="#2a73c5" flat
          class="text-white"
        >
          Create New Project
        </v-btn>
      </template>

      <v-card class="pa-2">
        <v-card-title>
          <div class="text-grey text-center mt-4 text-uppercase">
            <h2>Add a New Project</h2>
          </div>
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-text-field
              label="Title"
              variant="underlined"
              prepend-icon="mdi-folder"
              v-model="newProject.title"
              :rules="inputRules"
            >
            </v-text-field>

            <v-textarea
              label="Information"
              variant="underlined"
              prepend-icon="mdi-pencil"
              v-model="newProject.content"
              :rules="inputRules"
            >
            </v-textarea>

            <v-text-field
              label="Due Date"
              type="date"
              variant="underlined"
              prepend-icon="mdi-calendar-range"
              v-model="newProject.due"
              :rules="inputRules"
            >
            </v-text-field>

            <div class="text-center">
              <v-btn class="mb-2" :loading="loading" @click="submit">Add Project</v-btn>
            </div>

          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  data: () => ({
    dialog: false,
    loading: false,
    newProject: {
      title: '',
      person: '',
      due: '',
      status: '',
      content: ''
    },
    inputRules: [
      v => v.length >= 3 || 'Minimum length is 3 characters'
    ]
  }),
  methods: {
    submit() {
      this.$refs.form.validate()
      .then(res => {
        if (res.valid) {
            this.loading = true;

            console.log(this.newProject)
            this.$emit('projectAdded')

            this.loading = false;
            this.dialog = false;
          }
        });
    }
  },
  computed: {
    formattedDate() {
      return this.newProject.due ? format(this.newProject.due, 'Do MMM YYY') : ''
    }
  }
}
</script>

<style>

</style>