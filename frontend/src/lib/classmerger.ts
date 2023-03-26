const clsx = (...className: any) => {
  return className.filter(Boolean).join(" ");
};

export default clsx;
