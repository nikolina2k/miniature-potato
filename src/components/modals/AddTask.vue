<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn flat round dense icon="close" v-close-popup />
    </q-card-section>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input
            outlined
            autofocus
            :rules="[(val) => !!val || 'This field is required']"
            v-model="taskToCreate.name"
            ref="name"
            label="Task name"
            class="col"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToCreate.name"
                name="close"
                @click="taskToCreate.name = ''"
                class="cursor-pointer"
              />
            </template>
          </q-input>
        </div>
        <div class="row q-mb-sm">
          <q-input outlined v-model="taskToCreate.dueDate" label="Due date">
            <template v-slot:append>
              <q-icon
                v-if="taskToCreate.dueDate"
                name="close"
                @click="clearDueDate"
                class="cursor-pointer"
              />
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="taskToCreate.dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Done" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div v-if="taskToCreate.dueDate" class="row q-mb-sm">
          <q-input
            class="col"
            outlined
            v-model="taskToCreate.dueTime"
            label="Due time"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToCreate.dueTime"
                name="close"
                @click="taskToCreate.dueTime = ''"
                class="cursor-pointer"
              />
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="taskToCreate.dueTime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Done" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          class="q-mr-sm q-mb-sm"
          label="Save"
          color="primary"
          type="submit"
        />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      taskToCreate: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false,
      },
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitForm() {
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.createTask();
      }
    },
    createTask() {
      this.addTask(this.taskToCreate);
      this.$emit("close");
    },
    clearDueDate() {
      this.taskToCreate.dueDate = "";
      this.taskToCreate.dueTime = "";
    },
  },
};
</script>

<style lang="scss"></style>
