import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import ProjectCard from './ProjectCard';
import './Projects.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const projectsData = [
    {
        id: 1,
        title: 'ColegioApp',
        description: 'Plataforma de gestión escolar integral con módulos para asistencia, calificaciones y comunicación.',
        tags: ['PHP', 'MySQL', 'Bootstrap'],
        image: 'https://placehold.co/600x340/e2e8f0/1e293b?text=ColegioApp',
        demoUrl: '#',
        repoUrl: 'https://github.com/TobbenTT/colegio',
        status: 'online'
    },
    {
        id: 2,
        title: 'Bitware',
        description: 'Solución de arquitectura backend para procesamiento de datos masivos en tiempo real.',
        tags: ['Python', 'AWS', 'FastAPI'],
        image: 'https://placehold.co/600x340/e2e8f0/1e293b?text=Bitware',
        demoUrl: 'https://youtu.be/vS63MtBvItw',
        repoUrl: 'https://github.com/TobbenTT/Bitware',
        status: 'video'
    },
    {
        id: 3,
        title: 'NeuroBeats',
        description: 'NeuroBeats es una plataforma de streaming de música de próxima generación que fusiona la experiencia de una red social con el poder de la Inteligencia Artificial.',
        tags: ['Python', 'Django', 'MySQL', 'Bootstrap'],
        image: 'https://placehold.co/600x340/e2e8f0/1e293b?text=NeuroBeats',
        demoUrl: '#',
        repoUrl: 'https://github.com/TobbenTT/NeuroBeats',
        status: 'video'
    },
    {
        id: 4,
        title: 'Gestor Funeraria - Rey David',
        description: 'Aplicación móvil nativa diseñada para optimizar la logística y gestión de servicios funerarios. Integra base de datos en tiempo real y geolocalización.',
        tags: ['Kotlin', 'Firebase', 'Google Maps'],
        image: 'https://placehold.co/600x340/e2e8f0/1e293b?text=Gestor+Funeraria',
        demoUrl: 'https://youtu.be/4vIozCK1Ay8',
        repoUrl: 'https://github.com/TobbenTT/GestorFuneraria',
        status: 'video'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <h2 className="section-title">Proyectos Destacados</h2>
            <div className="projects-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    className="projects-swiper"
                >
                    {projectsData.map(project => (
                        <SwiperSlide key={project.id} className="project-slide">
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Projects;
