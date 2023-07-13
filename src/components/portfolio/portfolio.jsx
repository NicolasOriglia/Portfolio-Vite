import React, { useState } from 'react';
import Items from './items';
import List from './list';
import { projects } from '../../Data';
import { AnimatePresence } from 'framer-motion';
import './portfolio.css';

const allNavList = ['all', ...new Set(projects.map((projects) => projects.category))];


const Portfolio = () => {

    const[projectItems, setMenuItems] = useState(projects);
    const [navList, setCategories] = useState(allNavList);

    const filterItems = (category) =>{
        if(category === 'all'){
            setMenuItems(projects);
            return;
        }
        const newProjectItem = projects.filter(
            (item)=> item.category === category
        );
        setMenuItems(newProjectItem);
    }

  return (
    <section className='portfolio section' id='work'>
        <h2 className='section__title text-cs'>Portfolio</h2>
        <p className='section__subtitle'>
            My <span>Cases</span>
        </p>

        <List list={navList} filterItems={filterItems} />

        <div className='portfolio__container container grid'>
            <AnimatePresence initial={false}>
            <Items projectItems={ projectItems } />
            </AnimatePresence>
        </div>
    </section>
  )
}

export default Portfolio
