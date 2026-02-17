import React from 'react';

// Building blocks productPickers components
import {
  IndexView as ProductPickersIndexView,
  ColorPicker as ColorPickerView,
  SizePicker as SizePickerView,
  QuantityPicker as QuantityPickerView,
} from 'blocks/productPickers';

const routes = [
  {
    path: '/blocks/product-pickers',
    renderer: (params = {}): React.JSX.Element => (
      <ProductPickersIndexView {...params} />
    ),
  },
  {
    path: '/blocks/product-pickers/color-picker',
    renderer: (params = {}): React.JSX.Element => <ColorPickerView {...params} />,
  },
  {
    path: '/blocks/product-pickers/size-picker',
    renderer: (params = {}): React.JSX.Element => <SizePickerView {...params} />,
  },
  {
    path: '/blocks/product-pickers/quantity-picker',
    renderer: (params = {}): React.JSX.Element => <QuantityPickerView {...params} />,
  },
];

export default routes;
