import React, { createContext, useState } from 'react'

const ModalActiveContext = createContext();

export default function ModalActiveProvider({ children }) {
    const [modalState, setModalState] = useState(false);

    return (
        <ModalActiveContext.Provider value={modalState}>
            {children}
        </ModalActiveContext.Provider>
    )
}
