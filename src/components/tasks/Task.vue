<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-accent' : 'bg-positive'"
    clickable
    v-ripple
  >
    <q-item-section side>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': task.completed }"
        >{{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-item-label class="row justify-end" caption>{{
            task.dueDate
          }}</q-item-label>
          <q-item-label class="row justify-end" caption
            ><small>{{ task.dueTime }}</small></q-item-label
          >
        </div>
        <div class="column justify-center">
          <q-icon name="event" size="md" class="q-ml-md" />
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn
        @click.stop="clickToDelete(id)"
        flat
        round
        color="negative"
        icon="delete"
        dense
      />
    </q-item-section>
  </q-item>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    clickToDelete(id) {
      this.$q
        .dialog({
          title: "Delete the task",
          message: "You sure?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    },
  },
};
</script>
<style></style>
