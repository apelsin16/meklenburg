import { useState } from 'react';
import classNames from 'classnames';
import './App.css';

import coatOfArms from './img/coat.jpg';
import i1 from './img/1.jpg';
import i2 from './img/8.jpg';
import i3 from './img/15.jpg';
import i4 from './img/23.jpg';
import MueritzGallery from './MueritzGallery';
import RuegenGallery from './RuegenGallery';
import SchwerinGallery from './SchwerinGallery';
import WismarGallery from './WismarGallery';

function App() {

    const [showGreating, setShowGreating] = useState(true);
    const [showHistory, setShowHistory] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showMGallery, setShowMGallery] = useState(false);
    const [showRGallery, setShowRGallery] = useState(false);
    const [showSGallery, setShowSGallery] = useState(false);
    const [showWGallery, setShowWGallery] = useState(false);

    const reset = () => {
        setShowGreating(false);
        setShowHistory(false);
        setShowGallery(false);
        setShowWGallery(false);
        setShowMGallery(false);
        setShowRGallery(false);
        setShowSGallery(false);
    }

    const showMainArea = () => {
        reset();
        setShowGreating(true);
    }

    const showHistoryArea = () => {
        reset();
        setShowHistory(true);
    }

    const showGalleryArea = () => {
        reset();
        setShowGallery(true);
    }
    const showMGalleryArea = () => {
        reset();
        setShowGallery(true);
        setShowMGallery(true);
    }
    const showRGalleryArea = () => {
        reset();
        setShowGallery(true);
        setShowRGallery(true);
    }
    const showSGalleryArea = () => {
        reset();
        setShowGallery(true);
        setShowSGallery(true);
    }
    const showWGalleryArea = () => {
        reset();
        setShowGallery(true);
        setShowWGallery(true);
    }

  return (
    <div className="App">
        <header className="bg-blue-600 text-white rounded p-4">
            <nav className='container '>
                <ul className='flex-none md:flex '>
                    <li 
                        onClick={showMainArea}
                        className={classNames( 'px-4',{
                            'font-bold': showGreating
                        })}
                    >Главная страница</li>
                    <li 
                        onClick={showHistoryArea}
                        className={classNames( 'px-4',{
                            'font-bold': showHistory
                        })}    
                    >Краткая история</li>
                    <li 
                        onClick={showGalleryArea}
                        className={classNames( 'px-4',{
                            'font-bold': showGallery
                        })}
                    >Галерея</li>
                </ul>
            </nav>
        </header>
        <div className='flex justify-center py-4'>
            <img src={coatOfArms} alt="Герб" className='w4/5' />
        </div>
        <h1 className='text-center font-bold text-2xl p-4'>Добро пожаловать в Мекленбург-Переднюю Померанию!</h1>

        {showGreating && <>
            <p>Мекленбург-Передняя Померания — это живописный уголок Германии, где история и природа сливаются в единое целое. Расположенный на северо-востоке страны, этот регион привлекает туристов своими великолепными озерами, густыми лесами и бескрайними песчаными пляжами Балтийского моря.</p>
            <p className='py-2 text-blue-600 font-bold'>Здесь вы найдете:</p>
            <ul className='md:flex flex-1-1-25% gap-2'>
                <li className='p-1'>
                    <span className='font-bold'>Исторические города и замки:</span>
                    <p className='p-1 border rounded'>Погрузитесь в атмосферу средневековья, посещая величественный Шверинский замок, ганзейские города Висмар и Росток, а также старинные улочки Грайфсвальда.</p>
                </li>
                <li className='p-1'>
                    <span className='font-bold'>Уникальные природные ландшафты:</span>
                    <p className='p-1 border rounded'>Исследуйте национальные парки Мюриц и Ясмунд, прогуляйтесь по белоснежным меловым утесам острова Рюген или насладитесь тишиной озер и рек Мекленбургского озерного края.</p>
                    </li>
                <li className='p-1'>
                    <span className='font-bold'>Культурное наследие и традиции:</span>
                    <p className='p-1 border rounded'>Мекленбург-Передняя Померания — это земля древних замков, музеев, фестивалей и традиционных ремесел. Узнайте больше о богатой культуре региона, погружаясь в историю и современные события.</p>
                    </li>
                <li className='p-1'>
                    <span className='font-bold'>Балтийское побережье: </span>
                    <p className='p-1 border rounded'>Откройте для себя одни из лучших пляжей Германии, уютные курорты и живописные рыбацкие деревни, где можно насладиться свежими морепродуктами и расслабляющим отдыхом на берегу моря.</p>
                </li>
            </ul>
            <p className='py-2'>Мекленбург-Передняя Померания — идеальное место для тех, кто ищет гармонию с природой, хочет прикоснуться к истории и открыть для себя новые горизонты. Приезжайте и откройте для себя сокровища этого уникального региона Германии!</p>
        </>}
        {showHistory && <div className='container mx-auto'>
            <p>Мекленбург-Передняя Померания — это федеральная земля на северо-востоке Германии с богатой и разнообразной историей. Вот краткий обзор её исторического пути:</p>
            <h2 className='text-xl font-bold text-center p-4'>Древность и Средневековье</h2>
            <ol>
                <li>
                    <h3 className='text-lg font-bold'>Древние времена:</h3>
                    <p>В древности эта территория была населена различными славянскими племенами, такими как ободриты и поморяне.</p>
                </li>
                <li>
                    <h3 className='text-lg font-bold'>Средневековье:</h3>
                    <p>В 12 веке территория была завоевана немцами, которые создали здесь феодальные княжества. В 1160 году саксонские герцоги начали колонизацию и основание новых поселений.</p>
                </li>
            </ol>
            <h2 className='text-xl font-bold text-center p-4'>Ганзейский союз и Мекленбург</h2>
            <ol>
                <li>
                    <h3 className='text-lg font-bold'>Ганзейский союз:</h3>
                    <p>В 13-16 веках города Висмар и Росток были важными членами Ганзейского союза — торгового альянса северогерманских городов, что способствовало их экономическому процветанию.</p>
                </li>
                <li>
                    <h3 className='text-lg font-bold'>Мекленбург:</h3>
                    <p>В 1350 году Мекленбург стал герцогством, которое в дальнейшем разделилось на Мекленбург и Переднюю Померанию. Эти территории управлялись разными ветвями династии Веттинов и других династий.</p>
                </li>
            </ol>
            <h2 className='text-xl font-bold text-center p-4'>Раннее Новое время и Наполеоновские войны</h2>
            <ol>
                <li>
                    <h3 className='text-lg font-bold'>Династия Мекленбургов:</h3>
                    <p>В 16-17 веках Мекленбург и Передняя Померания были объединены под управлением герцогов Мекленбургов, и территория была центром торгового и культурного развития.</p>
                </li>
                <li>
                    <h3 className='text-lg font-bold'>Наполеоновские войны:</h3>
                    <p>В начале 19 века, во время Наполеоновских войн, территории Мекленбурга и Передней Померании были оккупированы французами. После Венского конгресса 1815 года они вновь вошли в состав Пруссии как часть Северогерманского союза.</p>
                </li>
            </ol>
            <h2 className='text-xl font-bold text-center p-4'>19 и 20 века</h2>
            <ol>
                <li>
                    <h3 className='text-lg font-bold'>Кайзерская Германия:</h3>
                    <p>В конце 19 века регион был частью Германской империи. Экономика развивалась, особенно в сельском хозяйстве и судостроении.</p>
                </li>
                <li>
                    <h3 className='text-lg font-bold'>Веймарская республика и нацистский режим:</h3>
                    <p>После Первой мировой войны, в 1918 году, регион стал частью Веймарской республики. В 1933 году, с приходом к власти нацистов, началась новая эра политических и социальных изменений.</p>
                </li>
                <li>
                    <h3 className='text-lg font-bold'>Вторая мировая война:</h3>
                    <p>В ходе Второй мировой войны регион сильно пострадал от боевых действий и бомбардировок. После войны территория была включена в ГДР (Северную Германию).</p>
                </li>
            </ol>
            <h2 className='text-xl font-bold text-center'>Современность</h2>
            <ol>
                <li>
                    <h3 className='text-lg font-bold'>После объединения Германии:</h3>
                    <p>После объединения Германии в 1990 году, Мекленбург-Передняя Померания стала одной из новых федеральных земель. В последние десятилетия регион активно развивает туризм, культуру и экономику, привлекая туристов своими природными красотами, историческими памятниками и курортами на побережье Балтийского моря.</p>
                </li>
            </ol>
            <p>Мекленбург-Передняя Померания сегодня известна своими живописными ландшафтами, богатым культурным наследием и туристическими достопримечательностями, которые делают её привлекательной для посетителей и исследователей.</p>
        </div>}
        {showGallery && <>
            <h2 className='text-xl font-bold text-center p-2'>Фото красивейших локаций</h2>
            <ul className='md:flex justify-center'>
                <li className='px-4'
                    onClick={showMGalleryArea}
                >
                    <img src={i1} alt="Фото города Müritz" width='100%' />
                    Город Мюритц
                </li>
                <li className='px-4'
                    onClick={showRGalleryArea}
                >
                    <img src={i2} alt="Фото города Müritz" width='100%' />
                    Остров Рюген
                </li>
                <li className='px-4'
                    onClick={showSGalleryArea}
                >
                    <img src={i3} alt="Фото города Müritz" width='100%' />
                    Шверинский замок
                </li>
                <li className='px-4'
                    onClick={showWGalleryArea}
                >
                    <img src={i4} alt="Фото города Müritz" width='100%' />
                    Город Висмар
                </li>
            </ul>
            {showMGallery && <MueritzGallery />}
            {showRGallery && <RuegenGallery />}
            {showSGallery && <SchwerinGallery />}
            {showWGallery && <WismarGallery />}
        </>}
        </div>
  );
}

export default App;
