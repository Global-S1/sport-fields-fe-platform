const clsx = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ');

export default clsx;
