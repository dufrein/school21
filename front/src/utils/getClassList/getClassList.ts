import { GetClassListProps } from './types';

/**
 * Утилита фильтрации и создания параметра CSS-классов
 * @returns string строку классов или пустую строку
 * @param classNames GetClassListProps
 */
export const getClassList = (classNames: GetClassListProps): string => {

  if(!classNames || classNames.length < 1) {
    return '';
  }

  const filteredParams = classNames.filter((param) => param && typeof param === 'string');

  return filteredParams.join(' ');
};
