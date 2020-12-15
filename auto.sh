export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64/
export ANDROID_HOME=$HOME/Android/Sdk/
export PATH=$PATH:$ANDROID_HOME/tools
ionic cordova platform rm android
ionic cordova platform add android
ionic cordova build --release android
zip -d platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk META-INF/\*
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore CALLING_BELL-release-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk CALLINGBELL
zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk CallingBell.apk
