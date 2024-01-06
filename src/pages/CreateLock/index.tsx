import { CreateLockPageContainer } from './CreateLock.styled';
import CreateLockForm from './components/CreateLockForm';
import LockInfo from './components/CreateLockForm/LockInfo';

export default function CreateLockPage() {
  return (
    <CreateLockPageContainer>
      <CreateLockForm />
      <LockInfo />
    </CreateLockPageContainer>
  );
}
