import { useEffect, useState } from 'react';
import { Accordion } from './Accordion/Accordion';
import './App.css';
import Toggle from './ToggleTheme/Toggle';
import Tabs from './Tabs/Tabs';
import TabInfoOne from './Tabs/TabInfoOne';
import TabInfoTwo from './Tabs/TabInfoTwo';
import TabInfoThree from './Tabs/TabInfoThree';
import Modal from './Modal/Modal';
import Content from './Modal/Content';
import LoaderPage from './Loader/LoaderPage';
import Swal from 'sweetalert2';
import CollapsibleExample from './CollapsibleExample';
import { useTranslation } from 'react-i18next';



function App() {

const [activeTab, setActiveTab] = useState(0);
const [openModal, setOpenModal] = useState(false);
const [stateLoader, setStateLoader] = useState(true);
const {i18n, t} = useTranslation();

useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 3000);
    return () => clearTimeout(timer);
}, [])


const handleAlert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
}

const toggleLang = () => {
  i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
}

    return(
        <div>

            {/* Loader */}
            {stateLoader && <LoaderPage/>}

            <div>
            <CollapsibleExample/>
            </div>

            {/* Toggle Theme */}
            <Toggle />


            {/* Accordion */}
            <Accordion />

            {/* Tabs */}
            <Tabs setActiveTab={setActiveTab} />
            { activeTab === 0 && <TabInfoOne /> }
            { activeTab === 1 && <TabInfoTwo /> }
            { activeTab === 2 && <TabInfoThree /> }

            {/* Modal */}
            <div className='btn'>
                <button className='btn-style' onClick={() => setOpenModal(true)}>Open Modal</button>
            </div>
            {openModal && 
            <Modal setOpenModal={setOpenModal}>
                <Content setOpenModal={setOpenModal}/>
            </Modal>
            }
            
            <div className='btn'>
            <button className='btn-style' onClick={handleAlert}>Alert</button>
            </div>


            <div className='center'>
              <h1>{t('Welcome to React')}</h1>
            </div>

            <div className='center'>
              <button className='btn-style' onClick={toggleLang}>{i18n.language === 'en' ? 'RU' : 'EN'}</button>
            </div>


        </div>
    )
}

export default App;
