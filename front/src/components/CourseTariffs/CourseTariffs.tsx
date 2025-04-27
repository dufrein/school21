import React from 'react';
import Link from 'next/link';
import { CourseTariffsProps } from './types';
import styles from './styles.module.scss';
import { ROUTES } from '@constants';

/**
 * Компонент для отображения тарифов курса
 */
export const CourseTariffs: React.FC<CourseTariffsProps> = ({ course }) => {
  return (
    <div className={styles.tariffsList}>
      <h4 className={styles.tariffsTitle}>Входит в тарифы:</h4>
      {course.tariffs.map((tariff, index) => (
        <React.Fragment key={tariff.id}>
          <Link href={`${ROUTES.PRICING}/${tariff.documentId}`} className={styles.tariffLink}>
            {tariff.name}
          </Link>
          {index < course.tariffs.length - 1 && ', '}
        </React.Fragment>
      ))}
    </div>
  );
};
