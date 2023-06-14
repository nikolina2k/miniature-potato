<template>
  <q-page class="q-pa-lg">
    <q-list v-if="Object.keys(tasks).length" separator bordered>
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key">
      </task>
    </q-list>

    <div class="button">
      <q-btn
        @click="showAddTask = true"
        round
        dense
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import Task from "components/tasks/Task.vue";
import AddTask from "components/modals/AddTask.vue";

export default defineComponent({
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
  components: {
    Task,
    AddTask,
  },
});
</script>

<style lang="scss">
.button {
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: center;
  margin-bottom: 20px;
  margin-right: 20px;
}

@media screen and (max-width: 768px) {
  .button {
    right: 50%;
    margin-right: 0;
    transform: translateX(50%);
  }
}
</style>
