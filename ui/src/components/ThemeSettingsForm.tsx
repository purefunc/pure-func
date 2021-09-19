// Render Prop
import React from 'react'
import { Formik, Form } from 'formik'
import { Field, Button, Accordion } from 'components'
import { MenuThemeSettings } from 'src/dashboard/menus/menuTheme'

export const ThemeSettingsForm = () => {
  const theme = undefined

  const initialValues: MenuThemeSettings = {
    custom: {
      menuMaxWidth: theme?.custom?.menuMaxWidth || '',
      menuLineSize: theme?.custom?.menuLineSize || '',
      menuLineStyle: theme?.custom?.menuLineStyle || '',
      menuRadius: theme?.custom?.menuRadius || '',
      menuTitleSize: theme?.custom?.menuTitleSize || '',
      menuDescriptionSize: theme?.custom?.menuDescriptionSize || '',
      menuDisclaimerSize: theme?.custom?.menuDisclaimerSize || '',
      categoryNameSize: theme?.custom?.categoryNameSize || '',
      priceSize: theme?.custom?.priceSize || '',
      itemNameSize: theme?.custom?.itemNameSize || '',
      itemDescriptionSize: theme?.custom?.itemDescriptionSize || '',
      noteSize: theme?.custom?.noteSize || '',
      menuBaseSpaceSize: theme?.custom?.menuBaseSpaceSize || '',
      menuFontFamily: theme?.custom?.menuFontFamily || '',
      menuNormalWeight: theme?.custom?.menuNormalWeight || '',
      menuBoldWeight: theme?.custom?.menuBoldWeight || '',
      menuSpaceScale: theme?.custom?.menuSpaceScale || '',
      menuSpace: theme?.custom?.menuSpace || '',
    },
    colors: {
      background: theme?.colors?.background || '',
      textColor: theme?.colors?.textColor || '',
      headingColor: theme?.colors?.headingColor || '',
      lineColor: theme?.colors?.lineColor || '',
      primary: theme?.colors?.primary || '',
      accent: theme?.colors?.accent || '',
    },
    fonts: {
      family: theme?.fonts?.family || '',
      weight: theme?.fonts?.weight || '',
      fontScale: theme?.fonts?.fontScale || '',
    },
    layouts: {
      layout: theme?.layouts?.layout || '',
      alignment: theme?.layouts?.alignment || '',
      corners: theme?.layouts?.corners || '',
      category: {
        hasAccordion: theme?.layouts?.category?.hasAccordion || null,
      },
    },
  }

  // TODO: Update fields to selects, radios etc and get them hooked up to actual data and working in preview mode

  return (
    <Formik
      initialValues={initialValues}
      // validate={(values) => {
      //   const errors = {}
      //   if (!values.email) {
      //     errors.email = 'Required'
      //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      //     errors.email = 'Invalid email address'
      //   }
      //   return errors
      // }}
      // onSubmit={onSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form style={{ marginBottom: 'var(--largestSpace)' }}>
          <Button
            type="submit"
            disabled={isSubmitting}
            style={{
              position: 'fixed',
              right: 0,
              width: '400px',
              bottom: 0,
              borderRadius: 0,
            }}
          >
            Save
          </Button>
          <Accordion title="Colors" titleSize="var(--h6)">
            <>
              <Field isFormik name="colors.background" label="Background Color" />
              <Field isFormik name="colors.textColor" label="Text Color" />
              <Field isFormik name="colors.headingColor" label="Heading Color" />
              <Field isFormik name="colors.lineColor" label="Line Color" />
              <Field isFormik name="colors.primary" label="Primary Color" />
              <Field isFormik name="colors.accent" label="Accent Color" />
            </>
          </Accordion>
          <div className="margins">
            <Accordion title="Typography" titleSize="var(--h6)">
              <>
                <Field isFormik name="fonts.family" label="Font Family" />
                <Field isFormik name="fonts.weight" label="Font Weight" />
                <Field isFormik name="fonts.fontScale" label="Font Scale" />
              </>
            </Accordion>
          </div>{' '}
          <div className="margins">
            <Accordion title="Layout" titleSize="var(--h6)">
              <>
                <Field isFormik name="layouts.layout" label="Layout Type" />
                <Field isFormik name="layouts.alignment" label="Menu Alignment" />
                <Field isFormik name="layouts.corners" label="Corner Type" />
              </>
            </Accordion>
          </div>{' '}
          <div className="margins">
            <Accordion title="Categories" titleSize="var(--h6)">
              <>
                <Field isFormik name="layouts.category.hasAccordion" label="Show Accordion" />
              </>
            </Accordion>
          </div>
          <div className="margins">
            <Accordion title="Advanced Settings" titleSize="var(--h6)">
              <>
                <Field isFormik name="custom.menuMaxWidth" label="Max Menu Width" />
                <Field isFormik name="custom.menuLineSize" label="Border Width" />
                <Field isFormik name="custom.menuLineStyle" label="Border Style" />
                <Field isFormik name="custom.menuRadius" label="Border Radius" />
                <Field isFormik name="custom.menuTitleSize" label="Title Font Size" />
                <Field isFormik name="custom.menuDescriptionSize" label="Menu Description Size" />
                <Field isFormik name="custom.menuDisclaimerSize" label="Menu Disclaimer Size" />
                <Field isFormik name="custom.categoryNameSize" label="Category Name Size" />
                <Field isFormik name="custom.priceSize" label="Price Size" />
                <Field isFormik name="custom.itemNameSize" label="Item Name Size" />
                <Field isFormik name="custom.noteSize" label="Note Size" />
                <Field isFormik name="custom.menuNormalWeight" label="Normal Font Weight" />
                <Field isFormik name="custom.menuBoldWeight" label="Bold Font Weight" />
                <Field isFormik name="custom.menuSpaceScale" label="Menu Spacing Scale" />
                <Field isFormik name="custom.menuSpace" label="Menu Space Size" />
              </>
            </Accordion>
          </div>
        </Form>
      )}
    </Formik>
  )
}
