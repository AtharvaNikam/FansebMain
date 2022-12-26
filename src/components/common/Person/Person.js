import React, {useCallback} from 'react';
import {Container, Row, Button} from 'react-bootstrap';
import styles from './Person.module.css';
import {useNavigate} from 'react-router-dom';
import IMG_5514 from '../../../images/Influencer/IMG_5514.png';
import product1 from '../../../images/Influencer/product1.png';
import product2 from '../../../images/Influencer/product2.jpg';
import product3 from '../../../images/Influencer/product3.jpg';
import product4 from '../../../images/Influencer/product4.jpg';
import product5 from '../../../images/Influencer/product5.jpg';
import product6 from '../../../images/Influencer/product6.jpg';
import product7 from '../../../images/Influencer/product7.jpg';
import product8 from '../../../images/Influencer/product8.jpg';
import product9 from '../../../images/Influencer/product9.jpg';
import product10 from '../../../images/Influencer/product10.jpg';
import product11 from '../../../images/Influencer/product11.jpg';
import product12 from '../../../images/Influencer/product12.jpg';
import product121 from '../../../images/Influencer/product12.png';
const data = [
  {
    img: product1,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,350',
  },
  {
    img: product2,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,300',
  },
  {
    img: product3,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,350',
  },
  {
    img: product4,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,300',
  },
  {
    img: product5,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,350',
  },
  {
    img: product6,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,300',
  },
  {
    img: product7,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,350',
  },
  {
    img: product8,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,300',
  },
  {
    img: product9,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,350',
  },
  {
    img: product10,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,300',
  },
  {
    img: product11,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,350',
  },
  {
    img: product12,
    name: 'Lorem Text',
    para: 'Lorem Ipsum is simply dummy',
    price: '₹ 3,300',
  },

  //
];

const Person = () => {
  //for showing the data on tab clicking
  const [tab, setTab] = React.useState('block');
  const [opacit, setOpacit] = React.useState(1);
  const [opacit1, setOpacit1] = React.useState(0.5);
  const navigate = useNavigate();
  const _id = 2;

  return (
    <div>
      <div className={styles.head_container}>
        <h2 className={styles.head}>Anushank Seth</h2>
        <h2 className={styles.head1}>all things luxury</h2>
      </div>
      <div className={styles.Tabs}>
        <span
          onClick={() => {
            setTab('block');
            setOpacit(1);
            setOpacit1(0.5);
          }}
          style={{opacity: opacit}}
        >
          Showcase
        </span>
        <span
          onClick={() => {
            {
              setTab('none');
              setOpacit(0.5);
              setOpacit1(1);
            }
          }}
          style={{opacity: opacit1}}
        >
          Shop
        </span>
      </div>
      <div style={{display: tab}} className={styles.main_img}>
        <img src={IMG_5514} alt="" />

        <div className={styles.content}>
          <p className={styles.title}>About Isha</p>
          <div className={styles.btn_group}>
            <div className={styles.btn}>beauty & personal care</div>
            <div className={styles.btn}>lifestyle</div>
            <div className={styles.btn}>luxury</div>
          </div>
          <p className={styles.subtitle}>Forever chasing that glow!</p>
          <div className={styles.btn_group1}>
            <a href="#">subscribe to my scope</a>
            <span>
              <img
                src="https://enpointe.in/assets/img/icons/insta_icon2.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.second_sec}>
        <h2 className={styles.head}>picked by Anushank</h2>
        <div className={styles.image_sec}>
          {data.map(datas => (
            <div
              onClick={() => {
                navigate('/viewproduct/' + _id);
              }}
              className={styles.card}
            >
              <img src={datas.img} alt="" />
              <p className={styles.title}>{datas.name}</p>
              <p className={styles.sec_para}>{datas.para}</p>
              <p className={styles.title}>{datas.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.third_sec}>
        <img src={product121} alt="" />
        {/* <div className={styles.bottom_content}>
          <span>Anushank Seth loves</span>
        </div>
        <div className={styles.bottom_content1}>
          <span> Beauty</span>
        </div> */}
      </div>
    </div>
  );
};

export default Person;
