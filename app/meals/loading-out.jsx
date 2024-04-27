import React from 'react';

import styles from "./loading.module.css"

const MealsLoadingPage = () => {
    return (
        <p className={styles.loading}>Fetching Meals...</p>
    );
};

export default MealsLoadingPage;