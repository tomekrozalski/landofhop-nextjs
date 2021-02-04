import { useContext } from 'react';
import { useIntl } from 'react-intl';

import { Status as StatusEnum } from 'utils/helpers/serverCall';
import { IngredientType } from 'utils/enums/Beverage';
import { IngredientContext } from 'dashboard/utils/contexts';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import Error from './Error';
import Loading from './Loading';
import Select from './Select';

type Props = {
  defaultValue: any;
  disabled?: boolean;
  form: string;
  filterByType?: IngredientType;
  isMulti?: boolean;
  name: string;
};

const IngredientSelect: React.FC<Props> = ({ filterByType, ...rest }) => {
  const { locale } = useIntl();
  const { ingredients, status } = useContext(IngredientContext);

  if (status === StatusEnum.rejected) {
    return <Error />;
  }

  if (status === StatusEnum.pending) {
    return <Loading />;
  }

  return (
    <Select
      {...rest}
      options={ingredients
        .filter(({ type }) => (filterByType ? type === filterByType : true))
        .map(({ id, name, type }) => ({
          label: getValueByLanguage(name, locale).value,
          value: id,
          type,
        }))}
    />
  );
};

export default IngredientSelect;
