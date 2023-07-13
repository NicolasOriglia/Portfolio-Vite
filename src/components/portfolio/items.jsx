import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
import { motion } from "framer-motion";

const Items = ({ projectItems }) => {
  
    return(
        <>
        {projectItems.map((projectItems)=>{
        const { id, img, category, title, description, enlace } = projectItems;
        return (
            <motion.div layout
            animate={{opacity: 1, scale: 1}}
            initial={{opacity: .8, scale: .6}}
            exit={{opacity: .8, scale: .6}}
            transition={{duration: .6}}
            className='portfolio__items card card-two' key={id}>

                <div className='portfolio__img-wrapper'>
                    <img src={img} alt='' className='portfolio__img' />
                </div>

                <span className='portfolio__category text-cs'>{category}</span>
                <h3 className='portfolio__title'>{title}</h3>
                <p className='portfolio__description'>{description}</p>

                <a href={enlace} target='_blank' className='link'>
                learn more
                <FaArrowRight className='link__icon' />
                </a>

            </motion.div>
        );})}
        </>
    )
}

export default Items
