import * as S from './styles';
import TaskColumn from '../shared/TaskColumn';
import { useFetchData } from '../../api/useFetchData';
import { TaskAssignment } from '../../shared/types';
import { ASSIGNMENTS_TASKS_USERS_API } from '../../shared/constants';
import { useMemo } from 'react';

const Manager = () => {
  // I would rather let the backend handle the filtering but deep filtering
  // does not work as intended in json-server documentation.
  const { data, error, loading, fetchData } = useFetchData<TaskAssignment>(
    'get',
    ASSIGNMENTS_TASKS_USERS_API,
    {},
    null
  );
  const { backlog, inProgress, complete } = useMemo((): {
    backlog: TaskAssignment[];
    inProgress: TaskAssignment[];
    complete: TaskAssignment[];
  } => {
    const backlog: TaskAssignment[] = [],
      inProgress: TaskAssignment[] = [],
      complete: TaskAssignment[] = [];

    if (data.length && !loading) {
      data.forEach((ta) => {
        if (ta.task?.completed) {
          complete.push(ta);
        } else if (ta.accepted) {
          inProgress.push(ta);
        } else backlog.push(ta);
      });
    }

    return { backlog, inProgress, complete };
  }, [data, loading]);

  return (
    <S.Manager>
      <TaskColumn name={'Backlog'} isLoading={loading} tasks={backlog} />
      <TaskColumn name={'In Progress'} isLoading={loading} tasks={inProgress} />
      <TaskColumn name={'Completed'} isLoading={loading} tasks={complete} />
    </S.Manager>
  );
};

export default Manager;
