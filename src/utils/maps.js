import { TableCell } from '@mui/material';

export const tableAValues = [
  ['≤ 0,0', '≤ 0,0', '< 10', 0, '≤ 335', '≤ 4,5', '≤ 90'],
  ['≤ 30', '≤ 3,0', '< 16', 1, '> 335', '> 4,5', '> 90'],
  ['≤ 60', '> 13,5', '< 22', 2, '> 670', '> 9,0', '> 180'],
  ['≤ 90', '≤ 4,5', '< 28', 3, '> 1005', '> 13,5', '> 270'],
  ['≤ 120', '≤ 6,0', '< 34', 4, '> 1340', '> 18,0', '> 360'],
  ['≤ 150', '≤ 7,5', '< 40', 5, '> 1675', '> 22,5', '> 450'],
  ['≤ 180', '≤ 9,0', '< 46', 6, '> 2010', '> 27,0', '> 540'],
  ['≤ 210', '≤ 10,5', '< 52', 7, '> 2345', '> 31,0', '> 630'],
  ['≤ 240', '≤ 12,0', '< 58', 8, '> 2680', '> 36,0', '> 720'],
  ['≤ 270', '≤ 13,5', '< 64', 9, '> 3015', '> 40,0', '> 810'],
  ['> 270', '> 13,5', '≥ 64', 10, '> 3350', '> 45,0', '> 900'],
];

export const tableCValues = [
  ['≤ 40', '≤ 0,7', 0, '≤ 40', '≤ 1,6'],
  ['-', '> 0,7', 1, '> 40', '> 1,6'],
  ['> 40', '> 1,4', 2, '> 60', '> 3,2'],
  ['-', '> 2,1', 3, '-', '> 4,8'],
  ['> 60', '> 2,8', 4, '-', '> 6,4'],
  ['-', '> 3,5', 5, '> 80', '> 8,0'],
  ['-', '-', 6, '-', '-'],
  ['-', '-', 7, '-', '-'],
  ['-', '-', 8, '-', '-'],
  ['-', '-', 9, '-', '-'],
  ['> 80', '-', 10, '-', '-'],
];

// If the comparison matches the key => fill the cell with grey background
export const createCell = (comparison, key, text) => (
  <TableCell
    align="right"
    sx={{
      backgroundColor: comparison === key ? 'LightGrey' : '#ffffff',
    }}
  >
    {text}
  </TableCell>
);

// TODO: add tooltip => However, milk, drinkable yoghurt, flavoured or chocolate milk beverages containing more than 80% milk, soups and gazpacho, and plant-based drinks are not considered beverages for the purposes of calculating the Nutri-Score.
export const nsGroups = (key = null) => {
  const nsGroupsData = {
    'en:alcoholic-beverages': {
      translation: 'Bebidas alcohólicas',
      category: 'beverages',
    },
    'en:appetizers': { translation: 'Aperitivos', category: 'others' },
    'en:artificially-sweetened-beverages': {
      translation: 'Bebidas artificialmente azucaradas',
      category: 'beverages',
    },
    'en:biscuits-and-cakes': {
      translation: 'Galletas y tartas',
      category: 'others',
    },
    'en:bread': { translation: 'Pan', category: 'others' },
    'en:breakfast-cereals': {
      translation: 'Cereales de desayuno',
      category: 'others',
    },
    'en:cereals': { translation: 'Cereales', category: 'others' },
    'en:cereals-and-potatoes': {
      translation: 'Cereales y patatas',
      category: 'others',
    },
    'en:cheese': { translation: 'Queso', category: 'cheese' },
    'en:chocolate-products': {
      translation: 'Productos de chocolate',
      category: 'others',
    },
    'en:dairy-desserts': { translation: 'Postres lácteos', category: 'others' },
    'en:dressings-and-sauces': {
      translation: 'Aderezos y salsas',
      category: 'others',
    },
    'en:dried-fruits': { translation: 'Frutas desecadas', category: 'others' },
    'en:eggs': { translation: 'Huevos', category: 'others' },
    'en:fats': { translation: 'Grasas', category: 'fats' },
    'en:fatty-fish': { translation: 'Pescados grasos', category: 'others' },
    'en:fish-and-seafood': {
      translation: 'Pescados y mariscos',
      category: 'others',
    },
    'en:fish-meat-eggs': {
      translation: 'Pescado, carne y huevos',
      category: 'others',
    },
    'en:fruit-juices': {
      translation: 'Zumos de frutas',
      category: 'beverages',
    },
    'en:fruit-nectars': {
      translation: 'Néctares de frutas',
      category: 'beverages',
    },
    'en:fruits': { translation: 'Frutas', category: 'others' },
    'en:fruits-and-vegetables': {
      translation: 'Frutas y vegetales',
      category: 'others',
    },
    'en:ice-cream': { translation: 'Helados', category: 'others' },
    'en:lean-fish': { translation: 'Pescados magros', category: 'others' },
    'en:legumes': { translation: 'Legumbres', category: 'others' },
    'en:meat-other-than-poultry': {
      translation: 'Carnes no avícolas',
      category: 'others',
    },
    'en:milk-and-yogurt': {
      translation: 'Leches y yogures',
      category: 'others',
    },
    'en:nuts': { translation: 'Frutos secos', category: 'others' },
    'en:offals': { translation: 'Casquería', category: 'others' },
    'en:one-dish-meals': {
      translation: 'Platos preparados',
      category: 'others',
    },
    'en:pastries': { translation: 'Pastelería', category: 'others' },
    'en:pizza-pies-and-quiches': {
      translation: 'Pizzas, pasteles y quiches',
      category: 'others',
    },
    'en:plant-based-milk-substitutes': {
      translation: 'Sustitutos lácteos',
      category: 'others',
    },
    'en:potatoes': { translation: 'Patatas', category: 'others' },
    'en:poultry': { translation: 'Aves de corral', category: 'others' },
    'en:processed-meat': { translation: 'Carne procesada', category: 'others' },
    'en:salty-and-fatty-products': {
      translation: 'Productos grasos y salados',
      category: 'others',
    },
    'en:sandwiches': { translation: 'Bocadillos', category: 'others' },
    'en:soups': { translation: 'Sopas', category: 'others' },
    'en:sweetened-beverages': {
      translation: 'Bebidas azuraradas',
      category: 'beverages',
    },
    'en:sweets': { translation: 'Dulces', category: 'others' },
    'en:teas-and-herbal-teas-and-coffees': {
      translation: 'Tes y cafés',
      category: 'beverages',
    },
    'en:unknown': { translation: 'Desconocido', category: 'others' },
    'en:unsweetened-beverages': {
      translation: 'Bebidas no azucaradas',
      category: 'beverages',
    },
    'en:vegetables': { translation: 'Verduras', category: 'others' },
    'en:waters-and-flavored-waters': {
      translation: 'Aguas y aguas azucaradas',
      category: 'beverages',
    },
  };
  return !!key && key in nsGroupsData ? nsGroupsData[key] : nsGroupsData;
};

export const nsProperties = (key) => {
  const properties = {
    energy: 'Enegría',
    sugars: 'Azúcares',
    saturated_fats: 'Grasas',
    sodium: 'Sodio',
    fruits_and_vegetables: 'Frutas y vegetales',
    fiber: 'Fibra',
    protein: 'Proteínas',
  };
  return properties[key];
};

export const getFlags = (cc) => {
  if (cc === 'AD') return '🇦🇩';
  if (cc === 'AE') return '🇦🇪';
  if (cc === 'AF') return '🇦🇫';
  if (cc === 'AG') return '🇦🇬';
  if (cc === 'AI') return '🇦🇮';
  if (cc === 'AL') return '🇦🇱';
  if (cc === 'AM') return '🇦🇲';
  if (cc === 'AO') return '🇦🇴';
  if (cc === 'AQ') return '🇦🇶';
  if (cc === 'AR') return '🇦🇷';
  if (cc === 'AS') return '🇦🇸';
  if (cc === 'AT') return '🇦🇹';
  if (cc === 'AU' || cc === 'australia') return '🇦🇺';
  if (cc === 'AW') return '🇦🇼';
  if (cc === 'AX') return '🇦🇽';
  if (cc === 'AZ') return '🇦🇿';
  if (cc === 'BA') return '🇧🇦';
  if (cc === 'BB') return '🇧🇧';
  if (cc === 'BD') return '🇧🇩';
  if (cc === 'BE' || cc === 'belgium') return '🇧🇪';
  if (cc === 'BF') return '🇧🇫';
  if (cc === 'BG') return '🇧🇬';
  if (cc === 'BH') return '🇧🇭';
  if (cc === 'BI') return '🇧🇮';
  if (cc === 'BJ') return '🇧🇯';
  if (cc === 'BL') return '🇧🇱';
  if (cc === 'BM') return '🇧🇲';
  if (cc === 'BN') return '🇧🇳';
  if (cc === 'BO') return '🇧🇴';
  if (cc === 'BQ') return '🇧🇶';
  if (cc === 'BR') return '🇧🇷';
  if (cc === 'BS') return '🇧🇸';
  if (cc === 'BT') return '🇧🇹';
  if (cc === 'BV') return '🇧🇻';
  if (cc === 'BW') return '🇧🇼';
  if (cc === 'BY') return '🇧🇾';
  if (cc === 'BZ') return '🇧🇿';
  if (cc === 'CA' || cc === 'canada') return '🇨🇦';
  if (cc === 'CC') return '🇨🇨';
  if (cc === 'CD') return '🇨🇩';
  if (cc === 'CF') return '🇨🇫';
  if (cc === 'CG') return '🇨🇬';
  if (cc === 'CH' || cc === 'switzerland') return '🇨🇭';
  if (cc === 'CI') return '🇨🇮';
  if (cc === 'CK') return '🇨🇰';
  if (cc === 'CL') return '🇨🇱';
  if (cc === 'CM') return '🇨🇲';
  if (cc === 'CN' || cc === 'china') return '🇨🇳';
  if (cc === 'CO') return '🇨🇴';
  if (cc === 'CR') return '🇨🇷';
  if (cc === 'CU') return '🇨🇺';
  if (cc === 'CV') return '🇨🇻';
  if (cc === 'CW') return '🇨🇼';
  if (cc === 'CX') return '🇨🇽';
  if (cc === 'CY') return '🇨🇾';
  if (cc === 'CZ' || cc === 'czech-republic') return '🇨🇿';
  if (cc === 'DE' || cc === 'germany') return '🇩🇪';
  if (cc === 'DJ') return '🇩🇯';
  if (cc === 'DK') return '🇩🇰';
  if (cc === 'DM') return '🇩🇲';
  if (cc === 'DO') return '🇩🇴';
  if (cc === 'DZ') return '🇩🇿';
  if (cc === 'EC') return '🇪🇨';
  if (cc === 'EE') return '🇪🇪';
  if (cc === 'EG' || cc === 'egypt') return '🇪🇬';
  if (cc === 'EH') return '🇪🇭';
  if (cc === 'ER') return '🇪🇷';
  if (cc === 'ES' || cc === 'spain') return '🇪🇸';
  if (cc === 'ET') return '🇪🇹';
  if (cc === 'FI') return '🇫🇮';
  if (cc === 'FJ') return '🇫🇯';
  if (cc === 'FK') return '🇫🇰';
  if (cc === 'FM') return '🇫🇲';
  if (cc === 'FO') return '🇫🇴';
  if (cc === 'FR' || cc === 'france') return '🇫🇷';
  if (cc === 'GA') return '🇬🇦';
  if (cc === 'GB' || cc === 'united-kingdom') return '🇬🇧';
  if (cc === 'GD') return '🇬🇩';
  if (cc === 'GE') return '🇬🇪';
  if (cc === 'GF') return '🇬🇫';
  if (cc === 'GG') return '🇬🇬';
  if (cc === 'GH') return '🇬🇭';
  if (cc === 'GI') return '🇬🇮';
  if (cc === 'GL') return '🇬🇱';
  if (cc === 'GM') return '🇬🇲';
  if (cc === 'GN') return '🇬🇳';
  if (cc === 'GP') return '🇬🇵';
  if (cc === 'GQ') return '🇬🇶';
  if (cc === 'GR') return '🇬🇷';
  if (cc === 'GS') return '🇬🇸';
  if (cc === 'GT') return '🇬🇹';
  if (cc === 'GU') return '🇬🇺';
  if (cc === 'GW') return '🇬🇼';
  if (cc === 'GY') return '🇬🇾';
  if (cc === 'HK') return '🇭🇰';
  if (cc === 'HM') return '🇭🇲';
  if (cc === 'HN') return '🇭🇳';
  if (cc === 'HR') return '🇭🇷';
  if (cc === 'HT') return '🇭🇹';
  if (cc === 'HU') return '🇭🇺';
  if (cc === 'ID') return '🇮🇩';
  if (cc === 'IE') return '🇮🇪';
  if (cc === 'IL') return '🇮🇱';
  if (cc === 'IM') return '🇮🇲';
  if (cc === 'IN') return '🇮🇳';
  if (cc === 'IO') return '🇮🇴';
  if (cc === 'IQ') return '🇮🇶';
  if (cc === 'IR' || cc === 'ireland') return '🇮🇷';
  if (cc === 'IS') return '🇮🇸';
  if (cc === 'IT' || cc === 'italy') return '🇮🇹';
  if (cc === 'JE') return '🇯🇪';
  if (cc === 'JM') return '🇯🇲';
  if (cc === 'JO') return '🇯🇴';
  if (cc === 'JP' || cc === 'japan') return '🇯🇵';
  if (cc === 'KE') return '🇰🇪';
  if (cc === 'KG') return '🇰🇬';
  if (cc === 'KH') return '🇰🇭';
  if (cc === 'KI') return '🇰🇮';
  if (cc === 'KM') return '🇰🇲';
  if (cc === 'KN') return '🇰🇳';
  if (cc === 'KP') return '🇰🇵';
  if (cc === 'KR') return '🇰🇷';
  if (cc === 'KW') return '🇰🇼';
  if (cc === 'KY') return '🇰🇾';
  if (cc === 'KZ') return '🇰🇿';
  if (cc === 'LA') return '🇱🇦';
  if (cc === 'LB' || cc === 'lebanon') return '🇱🇧';
  if (cc === 'LC') return '🇱🇨';
  if (cc === 'LI') return '🇱🇮';
  if (cc === 'LK') return '🇱🇰';
  if (cc === 'LR') return '🇱🇷';
  if (cc === 'LS') return '🇱🇸';
  if (cc === 'LT') return '🇱🇹';
  if (cc === 'LU') return '🇱🇺';
  if (cc === 'LV') return '🇱🇻';
  if (cc === 'LY') return '🇱🇾';
  if (cc === 'MA') return '🇲🇦';
  if (cc === 'MC') return '🇲🇨';
  if (cc === 'MD') return '🇲🇩';
  if (cc === 'ME') return '🇲🇪';
  if (cc === 'MF') return '🇲🇫';
  if (cc === 'MG') return '🇲🇬';
  if (cc === 'MH') return '🇲🇭';
  if (cc === 'MK') return '🇲🇰';
  if (cc === 'ML') return '🇲🇱';
  if (cc === 'MM') return '🇲🇲';
  if (cc === 'MN') return '🇲🇳';
  if (cc === 'MO') return '🇲🇴';
  if (cc === 'MP') return '🇲🇵';
  if (cc === 'MQ') return '🇲🇶';
  if (cc === 'MR') return '🇲🇷';
  if (cc === 'MS') return '🇲🇸';
  if (cc === 'MT') return '🇲🇹';
  if (cc === 'MU') return '🇲🇺';
  if (cc === 'MV') return '🇲🇻';
  if (cc === 'MW') return '🇲🇼';
  if (cc === 'MX' || cc === 'mexico') return '🇲🇽';
  if (cc === 'MY') return '🇲🇾';
  if (cc === 'MZ') return '🇲🇿';
  if (cc === 'NA') return '🇳🇦';
  if (cc === 'NC') return '🇳🇨';
  if (cc === 'NE') return '🇳🇪';
  if (cc === 'NF') return '🇳🇫';
  if (cc === 'NG') return '🇳🇬';
  if (cc === 'NI') return '🇳🇮';
  if (cc === 'NL' || cc === 'netherlands') return '🇳🇱';
  if (cc === 'NO') return '🇳🇴';
  if (cc === 'NP') return '🇳🇵';
  if (cc === 'NR') return '🇳🇷';
  if (cc === 'NU') return '🇳🇺';
  if (cc === 'NZ') return '🇳🇿';
  if (cc === 'OM' || cc === 'oman') return '🇴🇲';
  if (cc === 'PA') return '🇵🇦';
  if (cc === 'PE') return '🇵🇪';
  if (cc === 'PF') return '🇵🇫';
  if (cc === 'PG') return '🇵🇬';
  if (cc === 'PH') return '🇵🇭';
  if (cc === 'PK') return '🇵🇰';
  if (cc === 'PL' || cc === 'poland') return '🇵🇱';
  if (cc === 'PM') return '🇵🇲';
  if (cc === 'PN') return '🇵🇳';
  if (cc === 'PR') return '🇵🇷';
  if (cc === 'PS') return '🇵🇸';
  if (cc === 'PT') return '🇵🇹';
  if (cc === 'PW') return '🇵🇼';
  if (cc === 'PY') return '🇵🇾';
  if (cc === 'QA') return '🇶🇦';
  if (cc === 'RE') return '🇷🇪';
  if (cc === 'RO') return '🇷🇴';
  if (cc === 'RS') return '🇷🇸';
  if (cc === 'RU') return '🇷🇺';
  if (cc === 'RW') return '🇷🇼';
  if (cc === 'SA') return '🇸🇦';
  if (cc === 'SB') return '🇸🇧';
  if (cc === 'SC') return '🇸🇨';
  if (cc === 'SD') return '🇸🇩';
  if (cc === 'SE' || cc === 'sweden') return '🇸🇪';
  if (cc === 'SG' || cc === 'singapore') return '🇸🇬';
  if (cc === 'SH') return '🇸🇭';
  if (cc === 'SI') return '🇸🇮';
  if (cc === 'SJ') return '🇸🇯';
  if (cc === 'SK') return '🇸🇰';
  if (cc === 'SL') return '🇸🇱';
  if (cc === 'SM') return '🇸🇲';
  if (cc === 'SN') return '🇸🇳';
  if (cc === 'SO') return '🇸🇴';
  if (cc === 'SR') return '🇸🇷';
  if (cc === 'SS') return '🇸🇸';
  if (cc === 'ST') return '🇸🇹';
  if (cc === 'SV') return '🇸🇻';
  if (cc === 'SX') return '🇸🇽';
  if (cc === 'SY') return '🇸🇾';
  if (cc === 'SZ') return '🇸🇿';
  if (cc === 'TC') return '🇹🇨';
  if (cc === 'TD') return '🇹🇩';
  if (cc === 'TF') return '🇹🇫';
  if (cc === 'TG') return '🇹🇬';
  if (cc === 'TH' || cc === 'thailand') return '🇹🇭';
  if (cc === 'TJ') return '🇹🇯';
  if (cc === 'TK') return '🇹🇰';
  if (cc === 'TL') return '🇹🇱';
  if (cc === 'TM') return '🇹🇲';
  if (cc === 'TN') return '🇹🇳';
  if (cc === 'TO') return '🇹🇴';
  if (cc === 'TR') return '🇹🇷';
  if (cc === 'TT') return '🇹🇹';
  if (cc === 'TV') return '🇹🇻';
  if (cc === 'TW') return '🇹🇼';
  if (cc === 'TZ') return '🇹🇿';
  if (cc === 'UA') return '🇺🇦';
  if (cc === 'UG') return '🇺🇬';
  if (cc === 'UM') return '🇺🇲';
  if (cc === 'US' || cc === 'united-states') return '🇺🇸';
  if (cc === 'UY') return '🇺🇾';
  if (cc === 'UZ') return '🇺🇿';
  if (cc === 'VA') return '🇻🇦';
  if (cc === 'VC') return '🇻🇨';
  if (cc === 'VE') return '🇻🇪';
  if (cc === 'VG') return '🇻🇬';
  if (cc === 'VI') return '🇻🇮';
  if (cc === 'VN') return '🇻🇳';
  if (cc === 'VU') return '🇻🇺';
  if (cc === 'WF') return '🇼🇫';
  if (cc === 'WS') return '🇼🇸';
  if (cc === 'XK') return '🇽🇰';
  if (cc === 'YE') return '🇾🇪';
  if (cc === 'YT') return '🇾🇹';
  if (cc === 'ZA') return '🇿🇦';
  if (cc === 'ZM') return '🇿🇲';
  return cc;
};
