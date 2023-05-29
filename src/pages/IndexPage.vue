<template>
  <q-page class="q-pa-lg">
    <q-list separator bordered>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-accent' : 'bg-positive'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strikethrough' : task.completed}">{{ task.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
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
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "shave beard",
          completed: false,
          dueDate: "07/01/2024",
          dueTime: "7pm",
        },
        {
          id: 2,
          name: "eat fruits",
          completed: false,
          dueDate: "11/05/2025",
          dueTime: "midnait",
        },
        {
          id: 3,
          name: "drink water",
          completed: false,
          dueDate: "20/11/2026",
          dueTime: "07:16",
        },
      ],
    };
  },
});
</script>

<style></style>
