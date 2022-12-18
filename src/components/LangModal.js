import React, { useState } from 'react'
import { ListGroup, Modal, ModalBody } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeLocale } from '../store/reducers/DataReducer'

const LangModal = () => {
    const store = useSelector(state => state.data);
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(true)
    return (
        <Modal isOpen={isOpen} toggle={() => { setOpen(!isOpen) }}  >
            <ModalBody>
                <ListGroup flush>
                    {store.locales.map((lang, key) => {
                        return (
                            <li key={key} className='fs-6  mb-2  text-center cursor-pointer list-group-item ' onClick={() => {
                                setOpen(!isOpen)
                                dispatch(changeLocale(lang))
                            }}>
                                {lang === 'tr' && 'Türkçe'}
                                {lang === 'en' && 'English'}
                                {lang === 'ru' && 'Русский'}
                                {lang === 'fr' && 'Français'}
                                {lang === 'de' && 'Deutsch'}
                                {lang === 'ar' && 'عربي'}
                            </li>
                        )
                    })}
                </ListGroup>
            </ModalBody>
        </Modal>
    )
}

export default LangModal