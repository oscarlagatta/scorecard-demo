import React, { createContext, useState, useContext, ReactNode } from 'react'

interface DrawerContextType {
  isOpen: boolean
  openDrawer: (content: ReactNode, title?: string, description?: string) => void
  closeDrawer: () => void
  drawerContent: ReactNode | null
  drawerTitle: string | null
  drawerDescription: string | null
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [drawerContent, setDrawerContent] = useState<ReactNode | null>(null)
  const [drawerTitle, setDrawerTitle] = useState<string | null>(null)
  const [drawerDescription, setDrawerDescription] = useState<string | null>(null)

  const openDrawer = (content: ReactNode, title?: string, description?: string) => {
    setDrawerContent(content)
    setDrawerTitle(title || null)
    setDrawerDescription(description || null)
    setIsOpen(true)
  }

  const closeDrawer = () => {
    setIsOpen(false)
    setDrawerContent(null)
    setDrawerTitle(null)
    setDrawerDescription(null)
  }

  return (
    <DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer, drawerContent, drawerTitle, drawerDescription }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawer = () => {
  const context = useContext(DrawerContext)
  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider')
  }
  return context
}
