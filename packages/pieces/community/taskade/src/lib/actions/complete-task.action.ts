import { taskadeAuth } from '../../';
import { createAction } from '@activepieces/pieces-framework';
import { taskadeProps } from '../common/props';
import { TaskadeAPIClient } from '../common/client';

export const completeTaskAction = createAction({
	auth: taskadeAuth,
	name: 'taskade-complete-task',
	displayName: 'Complete Task',
	description: 'Complete a task in a project.',
	props: {
		workspace_id: taskadeProps.workspace_id,
		folder_id: taskadeProps.folder_id,
		project_id: taskadeProps.project_id,
		task_id: taskadeProps.task_id,
	},
	async run(context) {
		const { project_id, task_id } = context.propsValue;

		const client = new TaskadeAPIClient(context.auth);

		return await client.completeTask(project_id, task_id);
	},
});
