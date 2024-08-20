const sourceImages = (require as any).context(
  "../app/users/components/assets/certificates",
  false,
  /\.jpg$/
);
const certificateArray = sourceImages.keys().map((key: any) => ({
  default: {
    src: sourceImages(key).default.src,
  },
}));

export default certificateArray;
