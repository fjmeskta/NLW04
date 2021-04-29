import styles from '../styles/components/Profile.module.css'
export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/fjmeskta.png" alt="Fábio José Mesquita" />
      <div>
        <strong>Fábio José Mesquita</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1</p>
      </div>
    </div>
  );
}