import React from 'react'

import Projectcard from '../Projectcard'

import autoexpressImage from '../../images/projects/autoexpress.jpg'
import autoexpressReact from '../../images/projects/autoexpressReact.jpg'
import recipesImage from '../../images/projects/recipes.jpg'
import portfolioImage from '../../images/projects/portfolio.jpg'
import vulcanoImage from '../../images/projects/vulcano.png'
import fcamaraimage from '../../images/projects/fcamara-min.png'


import { IconContext } from 'react-icons'
import { FaBehance } from 'react-icons/fa'

import style from '../style/Projects.module.css'

const Projects = () => {
    return (
        <div className={style.projectsContainer}>
            <h2> Projetos </h2>
            {/* <Projectcard
                img={autoexpressImage}
                title='AutoExpress Logística'
                code='https://github.com/ariel7198/autoexpress'
                technologies={['html', 'css', 'js', 'bootstrap', 'php', 'git']}
                description='Website de uma empresa virtual de logística, criado para praticar os conceitos de bootstrap'
            /> */}
            <Projectcard
                img={recipesImage}
                title='Receitas'
                link='https://recipes-ochre.vercel.app/'
                code='https://github.com/ariel7198/recipes'
                technologies={['html', 'css', 'js', 'react', 'js', 'git']}
                description='Website criado em React utilizando a API de receitas edamam.com para pesquisa de receitas por palavras chaves. Com exibição dos ingredientes e labels da receita em forma de badges '
            />
            <Projectcard
                img={portfolioImage}
                title='Website Porfolio'
                link='https://portfolio-drab-ten.vercel.app/'
                code='https://github.com/ariel7198/portfolio'
                technologies={['html', 'css', 'js', 'react', 'git']}
                description='Portfolio pessoal com projetos, experiência e contato, criado em React'
            />
            <Projectcard
                img={vulcanoImage}
                title='Vulcano'
                link='https://vulcano.nacao.digital/'
                code='https://github.com/ariel7198/project-vulcano'
                technologies={['html', 'css', 'js', 'git','vue']}
                description='Plataforma criada em Vue.js para monitoramento de tags de Google Analytics'
            />
            <Projectcard
                img={fcamaraimage}
                title='FCamara'
                link='https://fcamara.com/'
                code=''
                technologies={['wordpress', 'css', 'js']}
                description='Website institucional criado em WordPress'
            />
            <p> Veja mais projetos criados na plataforma duda mobile e WordPress</p>
            <IconContext.Provider value={{ className: 'social-icons', size: '1em' }}>
                <button className='buttonHover'> <a href="https://www.behance.net/ariel7198" target="_blank" rel="noreferrer"> <FaBehance /> Ver no behance  </a> </button>
            </IconContext.Provider>
        </div>
    )
}

export default Projects