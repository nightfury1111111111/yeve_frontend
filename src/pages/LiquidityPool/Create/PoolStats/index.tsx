import { PoolStats } from '../CreateLiqudityPool';

export default function CurrentPoolStats() {
  return (
    <PoolStats>
      <label>Current pool stats</label>
      <div>
        <span>25.95% APR</span>
        <span>$46.52m TVL</span>
        <span>$46.52m TVL</span>
        <span>$13.84m Volume 24h</span>
      </div>
    </PoolStats>
  );
}
