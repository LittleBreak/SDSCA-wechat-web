import styles from './index.less';
import { Header } from '@/components';
function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <Header></Header>
      {props.children}
    </div>
  );
}

export default BasicLayout;
