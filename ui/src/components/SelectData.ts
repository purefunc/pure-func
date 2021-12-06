export interface KeyOption {
  readonly value: string
  readonly label: string
  readonly color: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

export const keyOptions: readonly KeyOption[] = [
  { value: 'Vegetarian', label: 'Vegetarian', color: '#00B8D9', isFixed: true },
  { value: 'Spicy', label: 'Spicy', color: '#0052CC', isDisabled: true },
  { value: 'Vegan', label: 'Vegan', color: '#FF5630', isFixed: true },
  { value: 'Gluten Free', label: 'Gluten Free', color: '#5243AA' },
  { value: 'Mild', label: 'Mild', color: '#FF8B00' },
  { value: 'Medium', label: 'Medium', color: '#FFC400' },
  { value: 'Hot', label: 'Hot', color: '#36B37E' },
]

// export interface FlavourOption {
//   readonly value: string
//   readonly label: string
//   readonly rating: string
// }

// export const flavourOptions: readonly FlavourOption[] = [
//   { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
//   { value: 'chocolate', label: 'Chocolate', rating: 'good' },
//   { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
//   { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
// ]

// export interface StateOption {
//   readonly value: string
//   readonly label: string
// }

// export const stateOptions: readonly StateOption[] = [
//   { value: 'AL', label: 'Alabama' },
//   { value: 'AK', label: 'Alaska' },
//   { value: 'AS', label: 'American Samoa' },
//   { value: 'AZ', label: 'Arizona' },
//   { value: 'AR', label: 'Arkansas' },
//   { value: 'CA', label: 'California' },
//   { value: 'CO', label: 'Colorado' },
//   { value: 'CT', label: 'Connecticut' },
//   { value: 'DE', label: 'Delaware' },
//   { value: 'DC', label: 'District Of Columbia' },
//   { value: 'FM', label: 'Federated States Of Micronesia' },
//   { value: 'FL', label: 'Florida' },
//   { value: 'GA', label: 'Georgia' },
//   { value: 'GU', label: 'Guam' },
//   { value: 'HI', label: 'Hawaii' },
//   { value: 'ID', label: 'Idaho' },
//   { value: 'IL', label: 'Illinois' },
//   { value: 'IN', label: 'Indiana' },
//   { value: 'IA', label: 'Iowa' },
//   { value: 'KS', label: 'Kansas' },
//   { value: 'KY', label: 'Kentucky' },
//   { value: 'LA', label: 'Louisiana' },
//   { value: 'ME', label: 'Maine' },
//   { value: 'MH', label: 'Marshall Islands' },
//   { value: 'MD', label: 'Maryland' },
//   { value: 'MA', label: 'Massachusetts' },
//   { value: 'MI', label: 'Michigan' },
//   { value: 'MN', label: 'Minnesota' },
//   { value: 'MS', label: 'Mississippi' },
//   { value: 'MO', label: 'Missouri' },
//   { value: 'MT', label: 'Montana' },
//   { value: 'NE', label: 'Nebraska' },
//   { value: 'NV', label: 'Nevada' },
//   { value: 'NH', label: 'New Hampshire' },
//   { value: 'NJ', label: 'New Jersey' },
//   { value: 'NM', label: 'New Mexico' },
//   { value: 'NY', label: 'New York' },
//   { value: 'NC', label: 'North Carolina' },
//   { value: 'ND', label: 'North Dakota' },
//   { value: 'MP', label: 'Northern Mariana Islands' },
//   { value: 'OH', label: 'Ohio' },
//   { value: 'OK', label: 'Oklahoma' },
//   { value: 'OR', label: 'Oregon' },
//   { value: 'PW', label: 'Palau' },
//   { value: 'PA', label: 'Pennsylvania' },
//   { value: 'PR', label: 'Puerto Rico' },
//   { value: 'RI', label: 'Rhode Island' },
//   { value: 'SC', label: 'South Carolina' },
//   { value: 'SD', label: 'South Dakota' },
//   { value: 'TN', label: 'Tennessee' },
//   { value: 'TX', label: 'Texas' },
//   { value: 'UT', label: 'Utah' },
//   { value: 'VT', label: 'Vermont' },
//   { value: 'VI', label: 'Virgin Islands' },
//   { value: 'VA', label: 'Virginia' },
//   { value: 'WA', label: 'Washington' },
//   { value: 'WV', label: 'West Virginia' },
//   { value: 'WI', label: 'Wisconsin' },
//   { value: 'WY', label: 'Wyoming' },
// ]

// export interface GroupedOption {
//   readonly label: string
//   readonly options: readonly ColourOption[] | readonly FlavourOption[]
// }

// export const groupedOptions: readonly GroupedOption[] = [
//   {
//     label: 'Colours',
//     options: colourOptions,
//   },
//   {
//     label: 'Flavours',
//     options: flavourOptions,
//   },
// ]
