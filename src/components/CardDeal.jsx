import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Our mission is to provide <br className="sm:block hidden" />strong platform with
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      wide range of services to meet our clients' needs. Our services include CERT-In compliance, specialized security audits, and more. We are also certified as ISO 9001 and CMMI 3.
      </p>

      <a href="https://wa.me/918811080713" target="_blank" rel="noopener noreferrer">
        <Button styles={`mt-10`} />
      </a>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
