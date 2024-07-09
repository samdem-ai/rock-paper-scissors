import { Weapon } from "@/types";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const WeaponComponent = ({
  weapon,
  size,
  handleChooseWeapon,
  disabled,
  className,
}: {
  weapon: Weapon;
  size: number;
  handleChooseWeapon?: Function;
  disabled: boolean;
  className?: string;
}) => {
  return (
    <button
      key={weapon?.name}
      className={`rounded-full bg-white p-4 bg-gradient-to-r ${weapon.gradientFrom} ${weapon.gradientTo} ${className}`}
      onClick={() => {
        handleChooseWeapon ? handleChooseWeapon(weapon) : null;
      }}
      disabled={disabled}
    >
      <div className="bg-white rounded-full p-8 custom-shadow-inner custom-shadow-hover">
        <Image
          src={weapon?.imageLink}
          width={size}
          height={size}
          alt={`${weapon?.name} icon`}
        />
      </div>
    </button>
  );
};

export default WeaponComponent;
