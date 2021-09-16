import React from 'react';
import CreatePostModal from './CreatePostModal';

export default {
  title: 'Components/CreatePostModal',
  component: CreatePostModal
};

const Template = (args) => <CreatePostModal {...args}/>;

export const CreatePostModalStory = Template.bind({});
CreatePostModalStory.args = {};