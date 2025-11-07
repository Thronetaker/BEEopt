# Compiler
CC = gcc

# Include path
CFLAGS = -Iinclude

# Source files
SRC = src/bee.c

# Object files
OBJ = src/bee.o

# Library output
LIB = lib/libbee.a

# Example program
EXE = example

# Default target
all: $(LIB) $(EXE)

# Step 0: Create lib folder if missing
$(LIB): | lib
	ar rcs $(LIB) $(OBJ)

lib:
	mkdir lib

# Step 1: Compile C file to object
$(OBJ): $(SRC) include/bee.h
	$(CC) -c $(SRC) -o $(OBJ) $(CFLAGS)

# Step 2: Create static library (handled above)
# $(LIB): $(OBJ)
#	ar rcs $(LIB) $(OBJ)

# Step 3: Build example program (links with library)
$(EXE): example.c $(LIB)
	$(CC) example.c -Llib -lbee -Iinclude -o $(EXE)

# Clean build files
clean:
	del /Q src\*.o lib\*.a example.exe

.PHONY: all clean
