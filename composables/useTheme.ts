export const useTheme = () => {
  const themeMode = useState('theme', () => {
    if (typeof localStorage === 'undefined') {
      return 'dark';
    }
    return localStorage.getItem('theme') || 'dark';
  });

  const applyTheme = () => {
    document.documentElement.setAttribute('data-theme', themeMode.value);
  };

  const toggleTheme = () => {
    themeMode.value = themeMode.value === 'light' ? 'dark' : 'dark';
    localStorage.setItem('theme', themeMode.value);
    applyTheme();
  };

  if (typeof document !== 'undefined') {
    applyTheme();
  }

  return { themeMode, toggleTheme };
};
