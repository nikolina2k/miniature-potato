<template>
  <q-item
    @click="task.completed = !task.completed"
    :class="!task.completed ? 'bg-accent' : 'bg-positive'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': task.completed }">{{
        task.name
      }}</q-item-label>
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
</template>
<script>
export default {
  props: ["task", "id"],
};
</script>
<style></style>
