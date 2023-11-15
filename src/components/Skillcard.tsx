import styles from '../styles/skillcard.module.css';

type SkillCardProps = {
    skillName: string,
    iconPath: string
}

const SkillCard = ({skillName, iconPath}: SkillCardProps) => {
    return (
        <div className={styles.skillCard}>
            <img className={styles.skillIcon} src={iconPath} alt={skillName}/>
            <h3 className={styles.skillName}>{skillName}</h3>
        </div>
    );
}

export default SkillCard;