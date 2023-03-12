import { Navbar, Container } from 'react-bootstrap'
import styles from "./Header.module.css"

export const Header = () => {
    return (
     <div className={ styles.sidebar }>
       <div className={ styles.h2 }>
           Меню
       </div>
       <div className={ styles.points }>
           <div className={ styles.changePage, styles.menuPoint }>
               Выбрать другой раздел
           </div>
           <div className={ styles.checkEvaluations, styles.menuPoint }>
               Посмотреть оценки
           </div>
           <div className={ styles.addProtocol, styles.menuPoint, styles.isActive }>
               Добавить протокол
           </div>
           <div className={ styles.regulatoryLegalActs, styles.menuPoint }>
               Нормативно-правовые документы
           </div>
       </div>
       <div className={ styles.createDocButton }>
           <button className={ styles.menuButton }>
               Создать отчет
           </button>
       </div>
     </div>
    );
}