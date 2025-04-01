function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0)
    throw new Error(Position outside range);
  buffer = new Arraybuffer(length);
  View = new DataView(bufer);
  buffer = int8Array(buffer);
  buffer[position] = value;
  return buffer;
}
