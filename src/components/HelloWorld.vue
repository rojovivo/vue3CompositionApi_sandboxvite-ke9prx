<script setup lang="ts">
import { ref, defineComponent } from 'vue';
import { GenericMapper } from '@/utils/GenericMapper';

type UserDto = {
  id: string;
  name: string;
};

type UserModel = {
  userId: string;
  userName: string;
};

const userTransformation = (source: UserDto): UserModel => ({
  userId: source.id,
  userName: source.name,
});

const userDto = ref<UserDto>({ id: '123', name: 'John Doe' });
const userMapper = new GenericMapper<UserDto, UserModel>(userTransformation);

const userModel = ref<UserModel>(userMapper.map(userDto.value));
</script>

<template>
  <div>
    <h1>{{ userModel.userName }}</h1>
  </div>
</template>
