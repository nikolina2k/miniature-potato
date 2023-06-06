<template>
  <q-page class="q-pa-lg">
    <q-list separator bordered>
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key">
      </task>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import Task from "components/tasks/Task.vue";

export default defineComponent({
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
  components: {
    Task,
  },
});
</script>

<style></style>
