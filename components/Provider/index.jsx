import styles from './index.module.css';

export default function Provider(props){
  return (
    <div className={styles.provider} {...props}>
      { props.children }
    </div>
  )
};
