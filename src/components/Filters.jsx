import React from 'react';
import format from 'date-fns/format';
import subMonths from 'date-fns/subMonths';
import Grid from '@material-ui/core/Grid';

const Filters = ({ setTs_to }) => (
  <Grid container>
    <label>
      <span>Periodo</span>
      <select name="ts_to" onChange={e => { setTs_to(e.currentTarget.value); }}>
        <option value={format(subMonths(new Date(), 6), 't')}>Più vecchie di 6 mesi</option>
        <option value={format(subMonths(new Date(), 12), 't')}>Più vecchie di 12 mesi</option>
      </select>
    </label>
  </Grid>
);

export default Filters;
