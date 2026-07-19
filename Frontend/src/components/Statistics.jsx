import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, PackageCheck, Trophy, Leaf } from 'lucide-react';
import { statistics } from '../data';

const iconMap = {
  1: { Icon: Users, color: 'text-sky-400' },
  2: { Icon: PackageCheck, color: 'text-orange-400' },
  3: { Icon: Trophy, color: 'text-yellow-400' },
  4: { Icon: Leaf, color: 'text-timbercraft-light-green' },
};

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-timbercraft-dark text-white">
      <div className="container-custom">
        <div className="stats stats-vertical sm:stats-horizontal w-full bg-transparent text-white divide-white/10">
          {statistics.map((stat) => {
            const entry = iconMap[stat.id] || {};
            const Icon = entry.Icon;
            return (
              <div key={stat.id} className="stat place-items-center py-6">
                <div className={`stat-figure ${entry.color || ''}`}>
                  {Icon && <Icon size={30} strokeWidth={1.75} />}
                </div>
                <div className="stat-value font-display text-timbercraft-green text-4xl">{stat.value}</div>
                <div className="stat-desc text-gray-400 uppercase tracking-widest text-xs mt-1">
                  {t(`statistics.items.${stat.id}.label`)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
